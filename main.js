function updateTimestamp() {
    const lastUpdated = document.getElementById('last-updated');
    lastUpdated.textContent = new Date().toLocaleString();
}

function renderEducation() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = academicData.education.map(edu => `
        <div class="timeline-item">
            <h3>${edu.degree} - ${edu.field}</h3>
            <div class="date">${edu.year}</div>
            <p>${edu.institution}</p>
        </div>
    `).join('');
}

function renderPublications() {
    const pubList = document.querySelector('.publications-list');
    pubList.innerHTML = academicData.publications.map(pub => `
        <div class="publication-item">
            <h3>${pub.title}</h3>
            <div class="date">${pub.year}</div>
            <p>${pub.authors}</p>
            <p>${pub.journal}</p>
            ${pub.doi ? `<a href="${pub.url}" target="_blank">DOI: ${pub.doi}</a>` : ''}
        </div>
    `).join('');
}

function initPage() {
    updateTimestamp();
    renderEducation();
    renderPublications();
}

document.addEventListener('DOMContentLoaded', initPage);
