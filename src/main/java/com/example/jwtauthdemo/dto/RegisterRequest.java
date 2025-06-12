package com.example.jwtauthdemo.dto;

import com.example.jwtauthdemo.model.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterRequest {
    
    @NotBlank(message = "Nome é obrigatório")
    private String name;
    
    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    private String email;
    
    @NotBlank(message = "Senha é obrigatória")
    private String password;
    
    private Role role = Role.ROLE_USER; // Por padrão, novos usuários são ROLE_USER
} 