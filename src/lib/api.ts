const API_BASE = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchAxis(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE}${endpoint}`;

    const defaultHeaders = {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY || '',
    };

    const response = await fetch(url, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`AXIS_API_ERROR: ${response.statusText}`);
    }

    return response.json();
}