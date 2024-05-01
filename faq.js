const qnaBoxes = document.querySelectorAll('.qnaBox');

        qnaBoxes.forEach(qnaBox => {
            qnaBox.addEventListener('click', () => {
                qnaBox.classList.toggle('active');
            });
        });
