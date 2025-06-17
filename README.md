# OllieStack - Craft

This is my template for Craft using Vite and TailwindCSS.

## Information

| Package / Plugin  | Version |
|-------------------|---------|
| Craft             | 5.7.7   |
| Vite              | 6.3.5   |
| Craft Vite Plugin | 5.0.2   |

## How to start

For a new project, it is a very simple procedure:
1. Create a project from the template
2. Configure ddev using ```ddev config```
3. Start the project using ```ddev start```
4. Install the composer packages using ```ddev composer install```
5. Install the project using ```ddev craft install```
6. Install the vite project ```ddev craft plugin/install vite```
7. Install the npm packages and start developing using ```yarn``` and ```yarn dev```

## Build the project

To build the project, simply run ```yarn build```