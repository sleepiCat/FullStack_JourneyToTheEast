import React from "react";

interface UserProfileProps {
    name: string;
    age: number;
}

export const UserProfile: React.FC<UserProfileProps> = ({name, age}) => {
    return (
        <p>{name} is {age} years old</p>
    )
} 