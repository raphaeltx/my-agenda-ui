# My Agenda UI

My Agenda UI is a React-based user interface for managing your agenda. It includes a chat bot for interacting with users. The user can add comments, texts, insights, register appointments, events just like an personal daybook.

## Features

- Chat bot for user interaction
- Internationalization support with `react-intl`
- Responsive design with Material-UI

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/my-agenda-ui.git
   cd my-agenda-ui

2. Install dependencies
    ```sh
    yarn install

## Usage
// TODO: describe how to run with Docker

1. Run the project
    ```sh
    yarn start

2. Open your browser and navigate to http://localhost:3000

## Project Structure

```
my-agenda-ui/
├── src/
│   ├── components/
│   │   ├── chat-bot/
│   │   │   ├── ChatBot.tsx
│   │   │   ├── ChatBot.css
│   │   ├── chat-bot-input-field/
│   │   │   ├── ChatBotInputField.tsx
│   │   │   ├── ChatBotInputField.css
│   │   │   ├── ChatBotInputField.types.ts
│   ├── translations/
│   │   ├── en.json
│   │   ├── pt.json
│   │   ├── intlConfig.ts
│   ├── index.tsx
│   ├── App.tsx
├── .prettierrc
├── package.json
├── README.md
