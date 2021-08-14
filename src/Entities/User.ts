import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'firstName',
        length: 50,
        nullable: false,
    })

    @Column({
        type: 'varchar',
        name: 'lastName',
        length: 50,
        nullable: false,
    })
    lastName: string;
}