# Actions-Travis

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