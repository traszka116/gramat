export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    permissions: string;
    points: number;

    constructor(id: number, name: string, email: string, password: string, permissions: string, points: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.permissions = permissions;
        this.points = points;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getPermissions(): string {
        return this.permissions;
    }

    setPermissions(permissions: string): void {
        this.permissions = permissions;
    }

    getPoints(): number {
        return this.points;
    }

    setPoints(points: number): void {
        this.points = points;
    }
}