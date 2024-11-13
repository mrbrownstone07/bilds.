"use client";

export function Footer() {
    return (
        <footer id='contact' className="footer font-bold footer-center text-md rounded p-10 border-t border-accent">
            <p className="text-xs lg:text-xs text-center">
                Bilds. {new Date().getFullYear()} All rights reserved.
            </p>
        </footer>
    );
}
