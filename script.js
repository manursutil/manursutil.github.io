// Datos de los proyectos con descripciones basadas en los READMEs reales
const projectsData = {
    'brain-mri': {
        title: 'Clasificación de Tumores Cerebrales con MRI',
        image: 'images/brain_mri.jpeg',
        description: `
            <p>Aplicación de deep learning lista para producción que clasifica imágenes de resonancia magnética cerebral en cuatro categorías utilizando un modelo ResNet18 entrenado con PyTorch. Construida con principios modulares de MLOps, incluyendo evaluación de modelos, servicio de API, seguimiento de métricas y despliegue contenerizado.</p>
            
            <p><strong>Características principales:</strong></p>
            <ul>
                <li>Clasificador ResNet18 fine-tuneado en 4 clases de tumores</li>
                <li>Código modular limpio: dataset.py, train.py, evaluate.py, api.py</li>
                <li>Endpoint /metrics con reporte de clasificación y matriz de confusión</li>
                <li>API de inferencia con FastAPI (/predict, /health, /metrics)</li>
                <li>Despliegue con Docker + Gunicorn listo para producción</li>
                <li>Desarrollo local con docker-compose</li>
                <li>Preparado para integración con MLflow/W&B y pipelines CI/CD</li>
            </ul>
            
            <p><strong>Dataset:</strong> Brain Tumor MRI dataset de Kaggle con carpetas Training/ y Testing/</p>
            
            <p><strong>Entrada:</strong> Imagen JPEG de escáner cerebral</p>
            <p><strong>Salida:</strong> Clase de tumor + puntuación de confianza</p>
        `
    },
    'obesity': {
        title: 'Evaluador Pediátrico de Obesidad y Nutrición',
        image: 'images/obesity.png',
        description: `
            <p>Aplicación web construida para asistir a pediatras en la evaluación de métricas de crecimiento infantil y generación de planes de alimentación semanales personalizados basados en estándares de la OMS. Diseñada para ser utilizada por profesionales de la salud en práctica clínica.</p>
            
            <p><strong>Evaluación antropométrica:</strong></p>
            <ul>
                <li>Calcula IMC, peso para la edad y altura para la edad (z-scores)</li>
                <li>Clasifica resultados usando estándares de crecimiento de la OMS</li>
                <li>Proporciona necesidades calóricas usando ecuaciones Schofield y WHO</li>
            </ul>
            
            <p><strong>Generador de planes de alimentación:</strong></p>
            <ul>
                <li>Usa la API Gemini de Google para generar planes semanales personalizados de 7 días</li>
                <li>Referencias nutricionales adaptadas a edad, sexo y clasificación del niño</li>
                <li>Incluye desglose calórico y de macronutrientes</li>
            </ul>
            
            <p><strong>Diseño centrado en la privacidad:</strong></p>
            <ul>
                <li>Sin inicio de sesión ni persistencia de datos</li>
                <li>Todos los cálculos se realizan localmente o dentro de una sesión API segura</li>
                <li>Diseñado exclusivamente para uso privado</li>
            </ul>
            
            <p><strong>Stack tecnológico:</strong> Frontend en React (Vite), Backend en FastAPI (Python), LLM Gemini 2.5 Flash, Datos de tablas de referencia WHO LMS y BMI</p>
            
            <p>Este proyecto fue creado específicamente para mi madre, pediatra, para simplificar su flujo de trabajo al evaluar necesidades nutricionales y proporcionar a las familias planes de alimentación estructurados.</p>
        `
    },
    'mini-shell': {
        title: 'Mini Shell en C',
        image: 'images/shell.png',
        description: `
            <p>Shell minimalista estilo Unix escrita en C con parsing y tokenización de comandos. Ejecuta programas externos mediante fork() + execvp() para procesos hijo y soporta piping de comandos usando |.</p>
            
            <p><strong>Comandos integrados:</strong></p>
            <ul>
                <li><strong>cd</strong> - cambia el directorio de trabajo actual</li>
                <li><strong>exit</strong> - sale de la shell</li>
                <li><strong>Piping (|)</strong> - pasa la salida de un comando a otro (un solo pipe)</li>
            </ul>
            
            <p><strong>Ejemplo de uso:</strong></p>
            <p>>>> ls -l<br>
            >>> pwd<br>
            >>> ls | grep ".c"<br>
            >>> cd<br>
            >>> exit</p>
            
            <p><strong>Compilación y ejecución:</strong></p>
            <p>gcc -Wall -Wextra -pedantic -std=c99 *.c -o sh<br>
            ./sh</p>
            
            <p><strong>Motivación:</strong> Esta shell fue construida como proyecto de aprendizaje para entender cómo funcionan las shells Unix internamente, enfocándose en control de procesos, llamadas al sistema y flujo de ejecución a nivel de sistema operativo.</p>
            
            <p><strong>Próximas mejoras:</strong> Encadenamiento de comandos</p>
        `
    },
    'neural-network': {
        title: 'Redes Neuronales desde Cero con NumPy',
        image: 'images/neural-net.png',
        description: `
            <p>Este repositorio contiene dos redes neuronales feedforward simples implementadas desde cero usando NumPy. Ambos modelos están entrenados en tareas de clasificación binaria basadas en lógica:</p>
            
            <ul>
                <li><strong>xor/</strong> - aprende la función XOR</li>
                <li><strong>majority-vote/</strong> - predice mayoría a partir de vectores binarios</li>
            </ul>
            
            <p><strong>Características:</strong></p>
            <ul>
                <li>Forward y backward propagation manuales</li>
                <li>Activaciones ReLU y Sigmoid</li>
                <li>Actualizaciones de pesos y bias sin librerías externas de ML</li>
                <li>Estructura de código legible y comprensible</li>
                <li>CLI básica para entradas de prueba</li>
            </ul>
            
            <p>Implementado completamente desde cero para comprender los fundamentos matemáticos y algorítmicos detrás de las redes neuronales. Cada componente está implementado manualmente para proporcionar una comprensión profunda de cómo funcionan internamente frameworks como PyTorch o TensorFlow.</p>
        `
    },
    'snake': {
        title: 'Snake AI con Reinforcement Learning',
        image: 'images/snake.gif',
        description: `
            <p>Snake AI combina un motor nativo en C con renderizado Raylib y un agente DQN en Python usando PyTorch.</p>
            
            <p>El flujo del proyecto permite jugar manualmente, exponer el motor como librería compartida y entrenar a la IA para que aprenda la política de movimiento de forma autónoma.</p>
            
            <p><strong>Pipeline principal:</strong></p>
            <ul>
                <li>Construir juego en C: <code>./build.sh game</code> y ejecutar <code>./build/snake</code></li>
                <li>Construir motor para Python: <code>./build.sh engine</code> (genera <code>build/libsnake.so</code>)</li>
                <li>Entrenar agente DQN: <code>python3 src/python_ai/training.py</code></li>
                <li>Ver al agente jugar: <code>python3 src/python_ai/play.py</code></li>
            </ul>
            
            <p><strong>Requisitos:</strong></p>
            <ol>
                <li>Raylib instalado con soporte de <code>pkg-config</code></li>
                <li>Python 3.14+</li>
                <li>Dependencias Python: <code>torch</code>, <code>numpy</code>, <code>matplotlib</code></li>
            </ol>
            
            <p><strong>Testing:</strong></p>
            <ol>
                <li>Tests del motor en C: <code>./build.sh test</code></li>
                <li>Prueba del entorno Python: <code>python3 src/python_ai/test_env.py</code></li>
            </ol>
            
            <p>El modelo entrenado se guarda en <code>model/snake_dqn.pt</code>. El repositorio muestra una integración completa entre desarrollo de juego en C y entrenamiento de RL en Python.</p>
        `
    }
};

// Obtener elementos del DOM
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-project-title');
const modalImage = document.getElementById('modal-project-image');
const modalDescription = document.getElementById('modal-project-description');

function openProjectModal(projectId) {
    const project = projectsData[projectId];

    if (project) {
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalDescription.innerHTML = project.description;
        modal.classList.add('show');
    }
}

// Añadir event listeners a los botones de detalle
document.querySelectorAll('.project-open').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Cerrar modal al hacer click en la X
modalClose.addEventListener('click', function() {
    modal.classList.remove('show');
});

// Cerrar modal al hacer click fuera del contenido
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});
