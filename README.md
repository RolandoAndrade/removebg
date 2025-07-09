# RemoveBG

Este proyecto tiene como objetivo desarrollar un modelo de Inteligencia Artificial capaz de eliminar el fondo de las imágenes de forma automática.

## Problema

La eliminación de fondos de imágenes es una tarea común en el procesamiento de imágenes. Históricamente, se ha resuelto mediante técnicas de hardware como el croma o la edición manual. Aunque existen herramientas en línea que automatizan este proceso, a menudo surgen preocupaciones sobre la privacidad de los datos y los posibles usos no autorizados de las imágenes.

## Solución Propuesta

Para abordar estas preocupaciones, este proyecto se centra en la creación de un modelo de IA local para la eliminación de fondos. Al ejecutar el modelo en un entorno controlado, se garantiza la privacidad de las imágenes y se tiene un control total sobre los costos y el uso.

## Marco Teórico

La base teórica de este proyecto se encuentra en el documento `Problemas de Segmentación.pdf`. Los temas clave incluyen:

-   Redes Neuronales Convolucionales (CNN)
-   Algoritmos de segmentación de imágenes
-   Cuantización de modelos para optimizar el rendimiento
-   Uso de backends de Keras
-   Modelos avanzados como SAM (Segment Anything)
-   Variantes con arquitecturas U-Net y Silueta

## Implementación Práctica

La implementación práctica y el desarrollo del modelo se detallan en el Jupyter Notebook `RemoveBG.ipynb`. Este notebook guía a través de los siguientes pasos:

1.  **Instalación de Dependencias:** Configuración del entorno con librerías como Keras, KerasCV y GroundingDINO.
2.  **Carga y Preprocesamiento de Datos:** Carga de imágenes y preparación para el modelo.
3.  **Detección de Objetos:** Uso de GroundingDINO para identificar y localizar los objetos de interés en la imagen.
4.  **Segmentación de Máscaras:** Aplicación de SAM (Segment Anything Model) para generar una máscara precisa del objeto detectado.
5.  **Eliminación del Fondo:** Uso de la máscara generada para separar el objeto del fondo.
6.  **Visualización y Guardado:** Muestra de los resultados y guardado de la imagen con el fondo eliminado.

## Tecnologías Utilizadas

-   **Python**
-   **Jupyter Notebook**
-   **Keras y KerasCV:** Para la construcción y el manejo de modelos de deep learning.
-   **GroundingDINO:** Para la detección de objetos basada en texto.
-   **Segment Anything Model (SAM):** Para la segmentación de alta precisión.

## Autor
Rolando Andrade

---

Este proyecto es solo con fines educativos.
