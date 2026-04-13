// Theme and page interactions
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const htmlElement = document.documentElement;

function setTheme(theme) {
  htmlElement.dataset.theme = theme;
  localStorage.setItem('portfolioTheme', theme);
  themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

function loadTheme() {
  const saved = localStorage.getItem('portfolioTheme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved || (prefersDark ? 'dark' : 'light'));
}

function setupThemeToggle() {
  if (!themeToggle) return;
  themeToggle.addEventListener('click', () => {
    const nextTheme = htmlElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}

function setupMobileMenu() {
  if (!mobileMenuBtn || !mobileMenu) return;
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupNavHighlight() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const navLink = document.querySelector(`.nav-links a[href='#${id}']`);
        if (!navLink) return;
        navLink.classList.toggle('active', entry.isIntersecting);
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupTypeAnimation() {
  const typedElement = document.getElementById('typed-text');
  if (!typedElement) return;

  const phrases = ['Data Analyst', 'SQL Developer', 'Python Programmer', 'Pandas Specialist'];
  let currentPhrase = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const text = phrases[currentPhrase];
    const visible = isDeleting ? text.slice(0, charIndex--) : text.slice(0, charIndex++);
    typedElement.textContent = visible;

    if (!isDeleting && charIndex === text.length + 1) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }

    setTimeout(type, isDeleting ? 55 : 90);
  };

  type();
}

function setupProjectCards() {
  const projectGrid = document.getElementById('project-grid');
  if (!projectGrid) return;

  const projects = [
    {
      title: 'Python Introduction',
      category: 'Python Mastery',
      description: 'Beginner-friendly Python examples with variables, output, and comments.',
      tags: ['Python', 'Beginner'],
      code: `"""Introduction to Python for beginners."""

print("Hello, Python!")

# Comments in Python
# This is a single-line comment.

"""This is a
multiline comment or docstring."""

# Basic math and print statements
print("2 + 3 =", 2 + 3)
print("Python supports strings, numbers, and easy output.")`,
    },
    {
      title: 'Variables & Data Types',
      category: 'Python Mastery',
      description: 'Explore strings, numbers, lists, tuples, and type conversions.',
      tags: ['Python', 'Types'],
      code: `"""Python variables and data types."""

# Variables and assignment
name = "Vivek"
age = 20
pi = 3.14159

# Basic types
print("Name:", name)
print("Age:", age)
print("Pi:", pi)

# Type conversions
print("Type of name:", type(name))
print("Type of age:", type(age))
print("Type of pi:", type(pi))

# Strings and formatting
message = "Hello, {}! You are {} years old.".format(name, age)
print(message)`,
    },
    {
      title: 'Control Flow',
      category: 'Python Mastery',
      description: 'Use conditionals and loops to control program logic.',
      tags: ['Logic', 'Loops'],
      code: `"""Control flow with conditionals and loops."""

# Conditional statements
score = 85
if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
else:
    grade = "C"

print(f"Score: \${score}, Grade: \${grade}")

# For loop
for i in range(1, 6):
    print("Number", i)

# While loop
count = 3
while count > 0:
    print("Countdown:", count)
    count -= 1`,
    },
    {
      title: 'Functions & Modules',
      category: 'Python Mastery',
      description: 'Write reusable functions and import Python modules.',
      tags: ['Functions', 'Modules'],
      code: `"""Functions and modules in Python."""

# Define a function

def greet(name):
    return f"Hello, \${name}!"

print(greet("Vivek"))

# Function with default argument

def power(base, exponent=2):
    return base ** exponent

print("3 squared =", power(3))
print("2 cubed =", power(2, 3))

# Import a built-in module
import math
print("Square root of 16:", math.sqrt(16))`,
    },
    {
      title: 'Collections & File I/O',
      category: 'Python Mastery',
      description: 'Work with lists, dictionaries, sets, and files in Python.',
      tags: ['Collections', 'Files'],
      code: `"""Collections and file I/O in Python."""

# Lists
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
print("List of fruits:", fruits)

# Tuples
coordinates = (10, 20)
print("Coordinates tuple:", coordinates)

# Dictionary
student = {"name": "Vivek", "age": 20, "city": "Delhi"}
print("Student dictionary:", student)
print("Student name:", student["name"])

# Set
unique_numbers = {1, 2, 2, 3, 4}
print("Unique numbers set:", unique_numbers)

# File input/output
with open("sample_text.txt", "w", encoding="utf-8") as file:
    file.write("This is a sample file for Python learning.\n")

with open("sample_text.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print("File content:\n", content)`,
    },
    {
      title: 'NumPy Introduction',
      category: 'NumPy Basics',
      description: 'Start with NumPy arrays and learn the basics of numeric computing.',
      tags: ['NumPy', 'Arrays'],
      code: `"""NumPy introduction for beginners."""

import numpy as np

print("NumPy version:", np.__version__)

python_list = [1, 2, 3, 4, 5]
numpy_array = np.array(python_list)

print("Python list:", python_list)
print("NumPy array:", numpy_array)
print("Type of numpy_array:", type(numpy_array))
print("Array dtype:", numpy_array.dtype)
print("Array shape:", numpy_array.shape)`,
    },
    {
      title: 'Array Creation',
      category: 'NumPy Basics',
      description: 'Create arrays with zeros, ones, ranges, and special shapes.',
      tags: ['NumPy', 'Creation'],
      code: `"""Array creation examples in NumPy."""

import numpy as np

arr1 = np.array([10, 20, 30, 40])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

print("arr1:", arr1)
print("arr1 shape:", arr1.shape)
print("arr2:\n", arr2)
print("arr2 shape:", arr2.shape)

zeros = np.zeros((2, 3))
ones = np.ones((3, 2))
full = np.full((2, 2), 7)
identity = np.eye(4)

print("zeros:\n", zeros)
print("ones:\n", ones)
print("full:\n", full)
print("identity matrix:\n", identity)

range_arr = np.arange(0, 10, 2)
linear = np.linspace(0, 1, 5)

print("arange 0-8 step 2:", range_arr)
print("linspace 0-1 with 5 values:", linear)`,
    },
    {
      title: 'Statistical Functions',
      category: 'NumPy Basics',
      description: 'Compute mean, median, variance, and summaries with NumPy.',
      tags: ['NumPy', 'Statistics'],
      code: `"""Statistical and summary functions in NumPy."""

import numpy as np

arr = np.array([[5, 10, 15], [20, 25, 30], [35, 40, 45]])

print("Array:\n", arr)
print("Sum of all values:", arr.sum())
print("Minimum value:", arr.min())
print("Maximum value:", arr.max())
print("Mean value:", arr.mean())
print("Median value:", np.median(arr))
print("Standard deviation:", arr.std())
print("Variance:", arr.var())

print("Sum by column:", arr.sum(axis=0))
print("Sum by row:", arr.sum(axis=1))`,
    },
    {
      title: 'Pandas Introduction',
      category: 'Pandas Learning',
      description: 'Create Series and DataFrames for structured analysis.',
      tags: ['Pandas', 'DataFrame'],
      code: `"""Pandas introduction for beginners."""

import pandas as pd

print("pandas version:", pd.__version__)

series = pd.Series([10, 20, 30, 40])
print("Series:\n", series)

records = {
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "city": ["Delhi", "Mumbai", "Chennai"],
}
df = pd.DataFrame(records)
print("DataFrame:\n", df)`,
    },
  ];

  projectGrid.innerHTML = projects
    .map((project, index) => `
      <article class="project-card reveal">
        <div class="project-card-top">
          <span class="tag-pill">${project.category}</span>
          <span class="tag-pill">${project.tags.join(' · ')}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-actions">
          <button class="btn-secondary code-toggle" data-index="${index}">View code</button>
          <a href="#contact" class="btn btn-secondary">Live demo</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" class="btn-secondary">GitHub</a>
        </div>
        <div class="project-code" id="project-code-${index}">
          <pre><code>${project.code}</code></pre>
        </div>
      </article>
    `)
    .join('');

  projectGrid.querySelectorAll('.code-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const index = button.dataset.index;
      const codeBlock = document.getElementById(`project-code-${index}`);
      const opened = codeBlock.classList.toggle('open');
      button.textContent = opened ? 'Hide code' : 'View code';
    });
  });
}

function finishLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  loader.classList.add('hidden');
}

window.addEventListener('load', () => {
  loadTheme();
  setupThemeToggle();
  setupMobileMenu();
  setupScrollReveal();
  setupNavHighlight();
  setupTypeAnimation();
  setupProjectCards();
  finishLoader();
});
