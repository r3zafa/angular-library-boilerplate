/**
 * This file contains an example interface definition.
 * It serves as a boilerplate for defining TypeScript interfaces
 * in the Angular library project.
 */

export interface ExampleInterface {
    /**
     * A unique identifier for the entity.
     */
    id: string;

    /**
     * The name associated with the entity.
     */
    name: string;

    /**
     * A description providing additional details about the entity.
     */
    description?: string;

    /**
     * The date and time when the entity was created.
     */
    createdAt: Date;

    /**
     * The date and time when the entity was last updated.
     */
    updatedAt: Date;
}