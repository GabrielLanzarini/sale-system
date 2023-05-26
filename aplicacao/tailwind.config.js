/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/components/**/*.{jsx,tsx}", "./src/pages/*.{jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                inputBg: "var(--input-background)",
                textErr: "var(--text-error)",
                bluePad: "var(--azul-padrao)",
                inatiBt: "var(--botao-inativo)",
            },
            dropShadow: {
                "button": "0 0 10px var(--azul-padrao)",
                "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
            },
        },
    },
    plugins: [],
}
