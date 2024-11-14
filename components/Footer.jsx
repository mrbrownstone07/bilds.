"use client";

export function Footer() {
    return (
        <footer className="footer font-bold footer-center text-md rounded p-10 border-t border-orange-500">
            <p className="text-xs lg:text-xs text-center text-orange-500">
                Bilds. {new Date().getFullYear()} All rights reserved.
            </p>
        </footer>
    );
}
