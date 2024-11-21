onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', () => {
        const textOverlay = document.querySelector('.text-overlay');
        const messageContainer = document.querySelector('.message-container');

        setTimeout(() => {
                textOverlay.classList.add('fade-out');
                messageContainer.classList.add('fade-in');
        }, 3000);
});
