# Nombre del Proyecto

## Ramas Principales

- `main`: Rama de desarrollo estable.
- `dev`: Ambiente de Desarrollo (features, fixes).
- `qa`: Ambiente de Pruebas.
- `main_prod`: Rama de Producción.

## Flujo de Trabajo

1. Todo el desarrollo comienza en `dev`.
2. Se pasa a `qa` para pruebas.
3. QA aprobado -> merge a `main`.
4. `main` se mergea a `main_prod` para despliegue productivo.

## Instrucciones

- Para agregar un feature nuevo, crea una rama desde `dev`.
- Al terminar un feature, haz un Pull Request a `dev`.
- QA aprueba cambios antes de pasar a `main`.
- Sólo se despliega a producción desde `main_prod`.

## Setup del proyecto

```bash
# Clonar el proyecto
git clone <repo-url>
cd <repo-name>

# Instalar dependencias
npm install

# Ejecutar en local
npm run dev
