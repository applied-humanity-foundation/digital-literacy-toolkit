import { Module } from '../types';
import { computerBasics } from './computer-basics';
import { internetSafety } from './internet-safety';
import { productivityTools } from './productivity-tools';
import { aiFundamentals } from './ai-fundamentals';
import { dataLiteracy } from './data-literacy';
import { digitalCommunication } from './digital-communication';

export const modules: Module[] = [
  computerBasics,
  internetSafety,
  productivityTools,
  aiFundamentals,
  dataLiteracy,
  digitalCommunication,
];

export function getModuleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function getModulesByDifficulty(difficulty: string): Module[] {
  return modules.filter((m) => m.difficulty === difficulty);
}
