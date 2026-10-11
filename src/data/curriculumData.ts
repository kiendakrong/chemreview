import { Chapter, Question } from '../types';
import { ALL_CHAPTERS } from './chapters';
import { buildQuestionsForChapter } from './questionBank';
import { GRADE10_SEEDS } from './seeds/grade10Seeds';
import { GRADE11_SEEDS } from './seeds/grade11Seeds';
import { GRADE12_SEEDS } from './seeds/grade12Seeds';

export const INITIAL_CHAPTERS: Chapter[] = ALL_CHAPTERS;

// Build the full authentic 966-question bank (30 MC, 6 TF, 10 SA per chapter across all 21 chapters)
function generateAllQuestions(): Question[] {
  const all: Question[] = [];

  for (const chapter of ALL_CHAPTERS) {
    let seed = null;
    if (chapter.grade === 10) {
      seed = GRADE10_SEEDS[chapter.id];
    } else if (chapter.grade === 11) {
      seed = GRADE11_SEEDS[chapter.id];
    } else if (chapter.grade === 12) {
      seed = GRADE12_SEEDS[chapter.id];
    }

    if (seed) {
      const chapterQuestions = buildQuestionsForChapter(
        chapter.id,
        chapter.title,
        chapter.grade,
        seed
      );
      all.push(...chapterQuestions);
    }
  }

  return all;
}

export const INITIAL_QUESTIONS: Question[] = generateAllQuestions();
