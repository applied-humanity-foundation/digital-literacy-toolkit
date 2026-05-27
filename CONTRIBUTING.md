# Contributing to the Digital Literacy Toolkit

Thank you for your interest in contributing to the Digital Literacy Toolkit! This project is maintained by the Applied Humanity Foundation, a 501(c)(3) nonprofit dedicated to making technology education accessible to everyone.

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/digital-literacy-toolkit.git
   cd digital-literacy-toolkit
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Create a branch** for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

- Run the dev server: `npm run dev`
- Run tests: `npm test`
- Lint your code: `npm run lint`
- Type-check: `npm run typecheck`

All code must pass linting, type-checking, and tests before merging.

## Pull Request Process

1. Update any relevant documentation (module content, code comments, docs/).
2. Add or update tests for any new functionality.
3. Ensure all CI checks pass.
4. Request a review from a maintainer.
5. PRs require at least one approval before merging.

## Code Style

- We use **TypeScript** with strict mode enabled.
- Follow the ESLint and Prettier configurations in the repository.
- Use descriptive variable and function names.
- Write JSDoc comments for public APIs.
- Prefer composition over inheritance.
- Keep functions small and focused on a single task.

## Content Guidelines

This is an educational project. When writing or editing learning content:

- **Audience**: Assume the reader has no prior technical knowledge.
- **Tone**: Friendly, encouraging, and patient. Avoid jargon without explanation.
- **Accuracy**: All technical information must be current and correct. Cite sources where appropriate.
- **Inclusivity**: Use examples that are culturally neutral and globally relevant. Avoid assumptions about the reader's location, language, or background.
- **Accessibility**: Use clear headings, short paragraphs, and bullet points. Content must be screen-reader friendly.
- **Translations**: If you contribute translations, they should be natural and fluent in the target language, not word-for-word machine translations. Cultural adaptation is encouraged.

## Adding a New Module

See [docs/ADDING_MODULES.md](docs/ADDING_MODULES.md) for a step-by-step guide.

## Reporting Issues

- Use the issue templates provided in `.github/ISSUE_TEMPLATE/`.
- Include steps to reproduce for bugs.
- For content issues, specify the module and section.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold a welcoming and inclusive environment.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
