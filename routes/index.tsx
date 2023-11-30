import { h } from "preact";
import Randomizer from "../islands/Randomizer.tsx";

export default function Home() {
    return (
        <div class="bg-gradient-to-r from-blue-600 to-blue-400 min-h-screen flex flex-col items-center justify-center">
            <div class="bg-clear rounded-lg shadow-xl p-6 max-w-md w-full">
                <div class="text-center py-4">
                    <img src="/phase10logo.png" alt="Phase 10 Logo" class="mx-auto" />
                </div>
                <Randomizer />
            </div>
            <div class="w-full flex justify-between items-center px-6 py-4 absolute bottom-0">
                <span class="text-white text-sm">Created by <b>Chris Alves</b></span>
            </div>
        </div>
    );
}