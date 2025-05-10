/**
 * Utility Functions
 * 
 * This file contains utility functions that can be reused across the application.
 * These functions are designed to perform common operations and simplify code reuse.
 * 
 * Note: A utility does not always need to be a class. The choice between using a class 
 * or standalone functions depends on the use case. For example, grouping related utilities 
 * in a class can improve organization, while standalone functions may be more appropriate 
 * for simpler or unrelated utilities.
 * 
 * File: example.util.ts
 */

export class ExampleUtil {
    /**
     * Generates a random integer between the specified min and max values (inclusive).
     * 
     * @param min - The minimum value (inclusive).
     * @param max - The maximum value (inclusive).
     * @returns A random integer between min and max.
     */
    static getRandomInt(min: number, max: number): number {
        if (min > max) {
            throw new Error('Min value cannot be greater than max value.');
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Formats a date object into a readable string (YYYY-MM-DD).
     * 
     * @param date - The date object to format.
     * @returns A formatted date string in the format YYYY-MM-DD.
     */
    static formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    /**
     * Checks if a given string is a palindrome.
     * 
     * @param str - The string to check.
     * @returns True if the string is a palindrome, false otherwise.
     */
    static isPalindrome(str: string): boolean {
        const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleaned === cleaned.split('').reverse().join('');
    }
}