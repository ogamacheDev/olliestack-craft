# OllieStack - Craft

This template is powered by Vite and CraftCMS using the [Vite plugin for CraftCMS](https://github.com/nystudio107/craft-vite) 
by [nystudio107](https://github.com/nystudio107). The whole system relies on the `CRAFT_ENVIRONMENT` environment variable, it will serve the Vite development server when the variable is set to `dev` and when it is set to either `staging` or `production`, it will serve the bundled script and style.

[Read the Craft Vite documentation for further configurations](https://nystudio107.com/docs/vite/)

## Setup a new project

#### 1. Configure your ddev project

```shell
ddev config
```

#### 2. Start the project

```shell
ddev start
```

#### 3. Install the composer packages

```shell
ddev composer install
```

#### 4. Install the project

```shell
ddev craft install
```

#### 5. Install the vite project 

```shell
ddev craft plugin/install vite
```

#### 6. Install the npm packages and start developing

```shell
yarn && yarn dev
```

## Existing project

#### 1. Start the project

```shell
ddev start
```

#### 1. Import the database

```shell
ddev import-db --file=/path/to/db
```

#### 3. Install the composer packages

```shell
ddev composer install
```

#### 4. Install the npm packages and start developing

```shell
yarn && yarn dev
```

## Commands

#### Development server

Run the vite development server with hot reload.

```shell
yarn dev
```

#### Build project

Build Javascript and CSS for production.

```shell
yarn build
```

## Versions

| Package / Plugin  | Version |
|-------------------|---------|
| Craft             | 5.7.7   |
| Vite              | 6.3.5   |
| Craft Vite Plugin | 5.0.2   |