// Configuración de Firebase y lógica relacionada
const firebaseConfig = {
    apiKey: "AIzaSyD6yV0l1X8KJQ1qQzQpX8KJQ1qQzQpX8K",
    authDomain: "capitata2026-web.firebaseapp.com",
    projectId: "capitata2026-web",
    storageBucket: "capitata2026-web.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456"
};

// Inicializar Firebase solo si no ha sido inicializado antes
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lógica del Sistema de Apoyo
    const supportButton = document.getElementById('supportButton');
    const supportCount = document.getElementById('supportCount');
    const supportMessage = document.getElementById('supportMessage');
    const STORAGE_KEY = 'hasSupportedNiko2026';
    
    const hasSupported = localStorage.getItem(STORAGE_KEY);
    
    function updateSupportUI(isSupported) {
        if (isSupported && supportButton) {
            supportButton.classList.add('supported');
            supportButton.innerHTML = '<i class="fas fa-check"></i> <span>¡Gracias por tu apoyo!</span>';
            supportButton.disabled = true;
            supportButton.setAttribute('aria-disabled', 'true');
        }
    }
    
    function updateSupportCount() {
        if (!supportCount) return;
        db.collection('counters').doc('supportCount').get()
            .then((doc) => {
                if (doc.exists) {
                    const count = doc.data().count || 0;
                    supportCount.textContent = count > 0 ? count : 'Muchas';
                } else {
                    db.collection('counters').doc('supportCount').set({ count: 0 });
                    supportCount.textContent = '0';
                }
            })
            .catch((error) => {
                console.error('Error al obtener el contador de apoyos:', error);
                supportCount.textContent = 'Muchas';
            });
    }
    
    function sendSupportToServer() {
        const counterRef = db.collection('counters').doc('supportCount');
        return db.runTransaction((transaction) => {
            return transaction.get(counterRef).then((doc) => {
                if (!doc.exists) {
                    transaction.set(counterRef, { count: 1 });
                    return 1;
                }
                const newCount = (doc.data().count || 0) + 1;
                transaction.update(counterRef, { count: newCount });
                return newCount;
            });
        });
    }
    
    if (hasSupported) {
        updateSupportUI(true);
    }
    updateSupportCount();
    
    if (supportButton) {
        supportButton.addEventListener('click', function() {
            if (hasSupported) {
                if (supportMessage) supportMessage.textContent = '¡Ya has mostrado tu apoyo! Gracias por tu confianza.';
                return;
            }
            
            // UI optimista (actualiza antes para que parezca más rápido)
            supportCount.textContent = (parseInt(supportCount.textContent) || 0) + 1;
            updateSupportUI(true);
            
            sendSupportToServer()
                .then((newCount) => {
                    localStorage.setItem(STORAGE_KEY, 'true');
                    supportCount.textContent = newCount > 0 ? newCount : 'Muchas';
                    if (supportMessage) supportMessage.textContent = '¡Gracias por tu apoyo! Juntos construiremos un Capiatá mejor.';
                })
                .catch(error => {
                    console.error('Error al registrar el apoyo en Firestore:', error);
                    if (supportMessage) supportMessage.textContent = 'Tu apoyo se registró localmente. ¡Gracias!';
                    localStorage.setItem(STORAGE_KEY, 'true'); // Lo guardamos localmente de todas formas
                });
        });
    }

    // Animación de contador de apoyo (Intersection Observer)
    function animateCounter(element, target, duration = 1500) {
        let current = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    if (supportCount && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentValue = parseInt(entry.target.textContent) || 0;
                    if (currentValue > 0) {
                        animateCounter(entry.target, currentValue, 1500);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(supportCount);
    }

    // 2. Contador de Visitantes
    const visitorCountElement = document.getElementById('visitorCount');
    const VISITOR_STORAGE_KEY = 'hasCountedVisit';
    
    function updateVisitorCount() {
        if (!visitorCountElement) return;
        db.collection('counters').doc('visitorCount').get()
            .then((doc) => {
                if (doc.exists) {
                    const count = doc.data().count || 0;
                    visitorCountElement.textContent = count.toLocaleString();
                } else {
                    db.collection('counters').doc('visitorCount').set({ count: 1 });
                    visitorCountElement.textContent = '1';
                }
            })
            .catch((error) => {
                console.error('Error al obtener contador de visitantes:', error);
                visitorCountElement.textContent = '0';
            });
    }
    
    function incrementVisitorCount() {
        const hasVisited = localStorage.getItem(VISITOR_STORAGE_KEY);
        
        if (!hasVisited) {
            localStorage.setItem(VISITOR_STORAGE_KEY, 'true');
            const counterRef = db.collection('counters').doc('visitorCount');
            
            db.runTransaction((transaction) => {
                return transaction.get(counterRef).then((doc) => {
                    if (!doc.exists) {
                        transaction.set(counterRef, { count: 1 });
                        return 1;
                    }
                    const newCount = (doc.data().count || 0) + 1;
                    transaction.update(counterRef, { count: newCount });
                    return newCount;
                });
            })
            .then((newCount) => {
                if (visitorCountElement) visitorCountElement.textContent = newCount.toLocaleString();
            })
            .catch((error) => {
                console.error('Error al incrementar contador de visitantes:', error);
            });
        } else {
            updateVisitorCount();
        }
    }
    
    incrementVisitorCount();
});
