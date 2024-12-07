# Actions-Travis

[English](#english) | [Español](#español)

# Español

Este proyecto es una demostración de integración continua usando GitHub Actions y Travis CI con una aplicación simple de Node.js.

## Funcionalidades

- Función simple de suma
- Pruebas unitarias con Jest
- Integración continua con GitHub Actions
- Integración continua con Travis CI

## Tecnologías Utilizadas

- Node.js
- Jest (para pruebas)
- GitHub Actions
- Travis CI

## Prerrequisitos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)
- Git

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/actions-travis.git
   cd actions-travis
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

## Uso

1. Ejecutar la aplicación:
   ```bash
   npm start
   ```

2. Ejecutar las pruebas:
   ```bash
   npm test
   ```

## Estructura del Proyecto

```
actions-travis/
├── .github/
│   └── workflows/
│       └── ci.yml          # Configuración de GitHub Actions
├── tests/
│   └── app.test.js        # Pruebas unitarias
├── app.js                 # Archivo principal de la aplicación
├── package.json          # Dependencias y scripts
├── package-lock.json     # Versiones específicas de dependencias
├── .travis.yml          # Configuración de Travis CI
└── README.md            # Documentación del proyecto
```

### Descripción de los Archivos

- `app.js`: Contiene la lógica principal de la aplicación
- `tests/app.test.js`: Pruebas unitarias usando Jest
- `.github/workflows/ci.yml`: Pipeline de integración continua con GitHub Actions
- `.travis.yml`: Configuración para la integración continua con Travis CI
- `package.json`: Gestión de dependencias y scripts de npm

---

# English

This project is a demonstration of continuous integration using GitHub Actions and Travis CI with a simple Node.js application.

## Features

- Simple addition function
- Unit testing with Jest
- Continuous integration with GitHub Actions
- Continuous integration with Travis CI

## Technologies Used

- Node.js
- Jest (for testing)
- GitHub Actions
- Travis CI

## Prerequisites

- Node.js (version 14 or higher)
- npm (included with Node.js)
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/actions-travis.git
   cd actions-travis
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Run the application:
   ```bash
   npm start
   ```

2. Run tests:
   ```bash
   npm test
   ```

## Project Structure

```
actions-travis/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions configuration
├── tests/
│   └── app.test.js        # Unit tests
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── package-lock.json     # Specific dependency versions
├── .travis.yml          # Travis CI configuration
└── README.md            # Project documentation
```

### File Description

- `app.js`: Contains the main application logic
- `tests/app.test.js`: Unit tests using Jest
- `.github/workflows/ci.yml`: Continuous integration pipeline with GitHub Actions
- `.travis.yml`: Travis CI configuration
- `package.json`: npm dependencies and scripts management