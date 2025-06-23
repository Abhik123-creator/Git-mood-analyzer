#!/usr/bin/env node
const simpleGit = require('simple-git');
const Sentiment = require('sentiment');
const chalk = require('chalk');

const git = simpleGit();
const sentiment = new Sentiment();

(async () => {
  try {
    const log = await git.log({ maxCount: 50 });
    const moods = { positive: 0, negative: 0, neutral: 0 };

    console.log(chalk.bold("\n🔍 Analyzing Your Last 50 Git Commits...\n"));

    log.all.forEach(commit => {
      const message = commit.message.trim();
      const result = sentiment.analyze(message);
      const score = result.score;

      let mood;
      if (score > 1) {
        mood = chalk.green('😊 Positive');
        moods.positive++;
      } else if (score < -1) {
        mood = chalk.red('😡 Negative');
        moods.negative++;
      } else {
        mood = chalk.yellow('😐 Neutral');
        moods.neutral++;
      }

      console.log(`${chalk.cyan(message)} → ${mood}`);
    });

    const total = moods.positive + moods.neutral + moods.negative;

    console.log(chalk.bold('\n📊 Mood Summary:\n'));
    console.log(`😊 Positive: ${chalk.green(moods.positive)} (${((moods.positive/total)*100).toFixed(1)}%)`);
    console.log(`😐 Neutral : ${chalk.yellow(moods.neutral)} (${((moods.neutral/total)*100).toFixed(1)}%)`);
    console.log(`😡 Negative: ${chalk.red(moods.negative)} (${((moods.negative/total)*100).toFixed(1)}%)`);

    console.log("\n🎭 Mood Bar:");
    console.log("😊".repeat(moods.positive) + "😐".repeat(moods.neutral) + "😡".repeat(moods.negative));
    console.log();

  } catch (err) {
    console.error(chalk.red('❌ Error:'), err.message);
  }
})();
