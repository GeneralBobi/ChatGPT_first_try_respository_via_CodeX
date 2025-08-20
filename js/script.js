const story = {
    intro: {
        title: "A Stirring",
        text: "You find yourself in a vast, quiet darkness. There is no sense of time or place. Before you, a faint light pulses rhythmically. In the deep silence, you feel a profound stillness.",
        choices: [
            { label: "Follow the faint light", targetId: "path_light" },
            { label: "Listen to the silence", targetId: "path_silence" }
        ]
    },
    path_light: {
        title: "The Crystal Heart",
        text: "You move towards the light and find a large, crystalline heart, beating with a soft, warm glow. It seems to invite you closer.",
        choices: [
            { label: "Touch the crystal", targetId: "end_energy" },
            { label: "Observe from a distance", targetId: "end_observer" }
        ]
    },
    path_silence: {
        title: "The Echoing Void",
        text: "You wait in the darkness, and your senses sharpen. The silence is not empty; it is full of potential. A whisper, from somewhere deep inside you, surfaces.",
        choices: [
            { label: "Whisper back into the void", targetId: "end_echo" },
            { label: "Hold the whisper within", targetId: "end_wisdom" }
        ]
    },
    end_energy: {
        title: "Connection",
        text: "A surge of energy connects you to everything. You are not just in the universe, you *are* the universe. The feeling is fleeting, leaving you alone again, with only the memory of light.",
        choices: []
    },
    end_observer: {
        title: "Observation",
        text: "You watch the crystal's light fade, a beautiful, lonely star in the immense darkness. You realize that to see the light, you must also accept the shadows.",
        choices: []
    },
    end_echo: {
        title: "Reflection",
        text: "Your whisper returns, amplified. The silence was not empty, but a mirror. You are answered only by yourself, a truth both isolating and empowering.",
        choices: []
    },
    end_wisdom: {
        title: "Stillness",
        text: "You hold the whisper, and in doing so, you understand. The silence teaches of time before and time after. You find a profound peace in your small, quiet moment within it.",
        choices: []
    }
};

document.addEventListener('DOMContentLoaded', () => {

    let currentSceneId = 'intro';
    const sceneContainer = document.getElementById('scene-container');
    const choicesContainer = document.getElementById('choices-container');
    const body = document.body;

    function renderScene(sceneId) {
        const scene = story[sceneId];
        if (!scene) return;

        const updateDOM = () => {
            sceneContainer.removeEventListener('transitionend', updateDOM);

            sceneContainer.innerHTML = `
                <div class="scene-content">
                    <h1>${scene.title}</h1>
                    <p>${scene.text}</p>
                </div>
            `;
            choicesContainer.innerHTML = '';

            if (scene.choices && scene.choices.length > 0) {
                scene.choices.forEach(choice => {
                    const button = document.createElement('button');
                    button.textContent = choice.label;
                    button.className = 'choice-button';
                    button.dataset.targetId = choice.targetId;
                    choicesContainer.appendChild(button);
                });
            } else {
                const restartButton = document.createElement('button');
                restartButton.textContent = "Begin Again";
                restartButton.className = 'choice-button';
                restartButton.dataset.targetId = 'intro';
                choicesContainer.appendChild(restartButton);
            }

            requestAnimationFrame(() => {
                sceneContainer.classList.add('is-visible');
            });
        };

        if (sceneContainer.classList.contains('is-visible')) {
            sceneContainer.classList.remove('is-visible');
            sceneContainer.addEventListener('transitionend', updateDOM);
        } else {
            updateDOM();
        }
    }

    const onMouseMove = (e) => {
        window.requestAnimationFrame(() => {
            // Aura effect
            body.style.setProperty('--x', e.clientX + 'px');
            body.style.setProperty('--y', e.clientY + 'px');

            // 3D Parallax effect on the text content
            const sceneContent = sceneContainer.querySelector('.scene-content');
            if (sceneContent) {
                const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
                const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
                const rotateY = x * 3; // Max rotation of 3 degrees
                const rotateX = -y * 3;
                sceneContent.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
    }
    window.addEventListener('mousemove', onMouseMove);

    choicesContainer.addEventListener('click', (e) => {
        if (e.target.matches('.choice-button')) {
            const targetId = e.target.dataset.targetId;
            if (targetId) {
                currentSceneId = targetId;
                renderScene(currentSceneId);
            }
        }
    });

    renderScene(currentSceneId);
});
