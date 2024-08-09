// Open LinkedIn and GitHub in a new tab when clicked
document.getElementById('linkedin-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action (optional, if you want custom behavior)
    window.open(this.href, '_blank');
});

document.getElementById('github-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action (optional, if you want custom behavior)
    window.open(this.href, '_blank');
});


// Show an alert when the profile picture is clicked
document.getElementById('profile-pic').addEventListener('click', function() {
    alert('Profile picture clicked!');
});

// Toggle visibility of work experience section
document.getElementById('toggle-work-experience').addEventListener('click', function() {
    const section = document.getElementById('work-experience');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
});

// Toggle visibility of skills section
document.getElementById('toggle-skills-experience').addEventListener('click', function() {
    const section = document.getElementById('skills-experience');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
});


// Highlight progress bars on hover
const progressBars = document.querySelectorAll('.file1');

progressBars.forEach(progressBar => {
    progressBar.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e0f7fa'; // Light cyan for hover effect
    });

    progressBar.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Remove hover effect
    });
});


// Create and show custom tooltip
document.querySelectorAll('[title]').forEach(element => {
    element.addEventListener('mouseover', function(event) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = this.getAttribute('title');
        document.body.appendChild(tooltip);

        const rect = this.getBoundingClientRect();
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    });

    element.addEventListener('mouseout', function() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

