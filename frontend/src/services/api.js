import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    }
});

// Interceptor para agregar el token si existe (luego lo usaremos para login)
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const reservacionService = {
    getAll: () => api.get('reservaciones/'),
    getDisponibilidad: (fecha) => api.get(`reservaciones/disponibilidad/?fecha=${fecha}`),
    create: (data) => api.post('reservaciones/', data),
    cancelar: (id) => api.post(`reservaciones/${id}/cancelar/`),
};

export const paqueteService = {
    getAll: () => api.get('paquetes/'),
};

export const menuService = {
    getAll: () => api.get('menus/'),
};

export const servicioService = {
    getAll: () => api.get('servicios/'),
};

export default api;