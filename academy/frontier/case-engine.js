(()=>{'use strict';
const $=id=>document.getElementById(id);
const caseId=new URLSearchParams(location.search).get('case')||'002';
const item=window.ATLAS_CASES&&window.ATLAS_CASES[caseId];
if(!item){document.querySelector('main').textContent='Case not found. Return to the Frontier Case Room to browse available cases.';return;}
const key='agent-atlas-frontier-v1';let progress;try{progress=JSON.parse(localStorage.getItem(key)||'{}')}catch{progress={}}
const itemKey='case-'+caseId;const saved=progress[itemKey]||{};
function persist(){progress[itemKey]=saved;try{localStorage.setItem(key,JSON.stringify(progress))}catch{}}
function set(id,value){$(id).textContent=value}
document.title='Case '+caseId+': '+item.title+' · Agent Atlas';set('category','Frontier Case '+caseId+' · '+item.category);set('title',item.title);set('question',item.question);set('duration','Estimated '+item.minutes+' minutes of active study · synthetic lab · no API keys required');set('client',item.client);set('stakes',item.stakes);set('realEvidence',item.reality);
$('hypothesis').value=saved.hypothesis||'';$('hypothesis').addEventListener('input',()=>{saved.hypothesis=$('hypothesis').value;persist()});
$('start').addEventListener('click',()=>{$('investigation').classList.add('open');saved.started=true;persist();$('investigation').scrollIntoView({behavior:'smooth'})});
if(saved.started)$('investigation').classList.add('open');
$('tabs').innerHTML=item.evidence.map((e,i)=>'<button type="button" class="tab'+(i===0?' selected':'')+'" data-tab="'+i+'">'+(i+1)+' · '+e[0]+'</button>').join('');
function showEvidence(i){$('evidence').innerHTML='<h3>'+item.evidence[i][0]+'</h3><div class="'+(item.evidence[i][1].includes('<')?'':'trace')+'">'+item.evidence[i][1]+'</div>';document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('selected',Number(b.dataset.tab)===i));saved.visited=[...new Set([...(saved.visited||[]),i])];persist()}
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>showEvidence(Number(b.dataset.tab))));showEvidence(0);
set('experimentTitle',item.experiment.title);set('experimentPrompt',item.experiment.prompt);
$('experimentButtons').innerHTML=item.experiment.options.map((o,i)=>'<button class="choice" type="button" data-option="'+i+'">'+o[0]+'</button>').join('');
document.querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.option);document.querySelectorAll('[data-option]').forEach(c=>c.classList.toggle('selected',c===b));set('experimentFeedback',item.experiment.options[i][1]);saved.experiment=i;persist()}));
$('conceptList').innerHTML=item.concepts.map((c,i)=>'<details><summary>'+(i+1).toString().padStart(2,'0')+' · '+c[0]+'</summary><p>'+c[1]+'</p><div class="trace">Worked explanation: '+c[2]+'</div><p><strong>Now apply it:</strong> '+c[3]+'</p></details>').join('');
$('exerciseList').innerHTML=item.exercises.map((e,i)=>'<div class="box"><h3>Exercise '+String.fromCharCode(65+i)+' · '+e[0]+'</h3><p>'+e[1]+'</p><textarea aria-label="Exercise '+String.fromCharCode(65+i)+' response" data-answer="'+i+'" placeholder="Write your evidence, reasoning and recommendation..."></textarea><details><summary>Hint</summary><p>'+e[2]+'</p></details><details><summary>Worked response and rubric</summary><p>'+e[3]+'</p></details></div>').join('');
document.querySelectorAll('[data-answer]').forEach(el=>{const i=el.dataset.answer;el.value=(saved.answers||{})[i]||'';el.addEventListener('input',()=>{saved.answers=saved.answers||{};saved.answers[i]=el.value;persist()})});
$('sources').innerHTML=item.sources.map((s,i)=>'<div class="source"><strong>'+(i+1)+'. <a href="'+s[1]+'" target="_blank" rel="noopener noreferrer">'+s[0]+' ↗</a></strong><small>'+s[2]+'</small></div>').join('');
$('quiz').innerHTML=item.quiz.map((q,i)=>'<fieldset><legend>'+(i+1)+'. '+q[0]+'</legend>'+q[1].map((choice,j)=>'<label class="option"><input type="radio" name="q'+i+'" value="'+j+'"> '+choice+'</label>').join('')+'</fieldset>').join('');
$('grade').addEventListener('click',()=>{let correct=0;let complete=true;const explanations=item.quiz.map((q,i)=>{const checked=document.querySelector('input[name="q'+i+'"]:checked');if(!checked)complete=false;const good=checked&&Number(checked.value)===q[2];if(good)correct++;return '<p><strong>Q'+(i+1)+' '+(good?'✓ Correct':'Review')+':</strong> '+q[3]+'</p>'}).join('');
if(!complete){set('score','Please answer all 10 questions before grading.');return}
const pass=correct>=8&&$('reviewed').checked;saved.score=correct;saved.passed=pass;saved.completedAt=pass?new Date().toISOString():null;persist();
set('score',correct+'/10 · '+(pass?'Frontier Investigator trophy earned ✓':correct<8?'At least 8/10 required':'Review two written exercises to complete'));
$('scoreBar').style.width=(correct*10)+'%';$('explanations').innerHTML=explanations});
$('resetQuiz').addEventListener('click',()=>{$('quiz').reset();set('score','');$('scoreBar').style.width='0';$('explanations').textContent=''});
if(saved.passed){set('score','Previously passed · Frontier Investigator trophy earned ✓');$('scoreBar').style.width='100%'}
})();
