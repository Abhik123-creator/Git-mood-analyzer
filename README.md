# 🎭 Git Mood Analyzer

Ever wondered what mood your development team is in? Now you can find out! Git Mood Analyzer is a fun CLI tool that analyzes the emotional tone of your git commit messages.

## 🚀 Features

- 📊 Analyzes the sentiment of git commit messages
- 🎨 Beautiful colored output in your terminal
- 🔍 Understand the emotional journey of your project
- 🤖 Powered by sentiment analysis

## 📦 Installation

```bash
npm install -g git-mood-analyzer
```

## 🎮 Usage

Simply run in any git repository:

```bash
git-mood-analyzer
```

## ✨ What it Does

Git Mood Analyzer scans through your repository's commit history and performs sentiment analysis on the commit messages. It helps you understand the emotional state of your development process - from the joy of new features to the frustration of bug fixes! 

## 🛠️ Tech Stack

- Node.js
- [sentiment](https://www.npmjs.com/package/sentiment) - For sentiment analysis
- [simple-git](https://www.npmjs.com/package/simple-git) - For Git operations
- [chalk](https://www.npmjs.com/package/chalk) - For colorful terminal output

## 📝 Example Output

```
😊 Happy commit: "Added awesome new feature!"
😐 Neutral commit: "Updated dependencies"
😤 Frustrated commit: "Fix stupid bug that wasted my entire day"
```

## 📄 License

ISC

## 🤝 Contributing

Feel free to contribute! Whether it's adding new features, improving the mood detection, or just fixing typos - all contributions are welcome!

## 💡 Fun Fact

The happiest commits usually happen on Friday afternoons, while the grumpiest ones tend to appear on Monday mornings! 😄

---

Made with 💖 and possibly some 😤 while debugging
