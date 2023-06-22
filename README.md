# Aplicación de Clima

Esta es una aplicación de clima simple desarrollada con Angular que te permite obtener la temperatura y la humedad de una ciudad utilizando la API de OpenWeatherMap.

## Características

- Ingreso de ciudad: Puedes ingresar el nombre de una ciudad en el campo de texto para obtener información sobre el clima actual.
- Obtención de datos: La aplicación realiza una solicitud a la API de OpenWeatherMap para obtener los datos de temperatura y humedad de la ciudad ingresada.
- Visualización de resultados: Los resultados se muestran en la interfaz de usuario, incluyendo la temperatura, la humedad y una descripción del clima.
- Imagen de clima predeterminada: Se muestra una imagen de clima predeterminada en caso de que no se encuentre disponible una imagen específica para la ciudad.

## Configuración

1. Clona el repositorio o descarga los archivos de la aplicación.
2. Asegúrate de tener Node.js y Angular CLI instalados en tu sistema.
3. Abre una terminal en el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

npm install

ng serve


5. Abre tu navegador web y visita la siguiente dirección: `http://localhost:4200`. La aplicación de clima debería cargarse correctamente.

## Personalización

Puedes personalizar la apariencia y el comportamiento de la aplicación de acuerdo a tus necesidades. Aquí hay algunos puntos que puedes considerar:

- Estilos: Modifica los estilos CSS en los archivos `.css` para personalizar el aspecto de los componentes.
- Imágenes de clima: Reemplaza la imagen de clima predeterminada en `dashboard.component.html` con imágenes personalizadas según corresponda.

## Recursos

- [Angular Documentation](https://angular.io/docs)
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y realiza los commits (`git commit -am 'Agrega nueva funcionalidad'`).
4. Envía tus cambios a tu repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Abre una pull request en este repositorio.

 proyecto está licenciado bajo la [MIT License](LICENSE).
