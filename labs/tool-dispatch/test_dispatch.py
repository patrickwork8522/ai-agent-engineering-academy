import unittest
from main import execute


class ToolDispatchTests(unittest.TestCase):
    def test_add(self):
        self.assertEqual(execute("add", {"a": 2, "b": 3}), 5)

    def test_unregistered_tool(self):
        with self.assertRaises(ValueError):
            execute("delete_all_files", {})

    def test_wrong_arguments(self):
        with self.assertRaises(ValueError):
            execute("add", {"a": 2})

    def test_reject_numeric_string(self):
        with self.assertRaises(ValueError):
            execute("add", {"a": "2", "b": 3})


if __name__ == "__main__":
    unittest.main()
