const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// obtener o generar el ID sesión
export const getSessionId = (): string => {
    if (typeof window === "undefined") return "";

    let sessionId = localStorage.getItem("axis_session_id");
    if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem("axis_session_id", sessionId);
    }
    return sessionId;
};

// función para poder pedir datos al api
export const fetchAxis = async (endpoint: string, options: RequestInit = {}) => {
    const sessionId = getSessionId();

    if (!API_BASE || !API_KEY) {
        console.error("⚠️ Error: Variables de entorno no configuradas en .env.local");
    }

    const defaultHeaders = {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY || "",
        "X-Session-ID": sessionId,
    };

    // url final
    const separator = endpoint.includes('?') ? '&' : '?';
    const url = `${API_BASE}${endpoint}${separator}X-Session-ID=${sessionId}`;

    const response = await fetch(url, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    });

    if (!response.ok) {
        // Log para debuggear errores de API en desarrollo
        const errorData = await response.json().catch(() => ({}));
        console.error(`[AXIS_API_ERROR] ${response.status}:`, errorData);
        throw new Error(errorData.message || "Error en la petición a Axis API");
    }

    return response.json();
};