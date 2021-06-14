CREATE DATABASE ng_bd_banco;

USE ng_bd_banco;

CREATE TABLE destinatario (
    destinatario_id INT unsigned auto_increment PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    rut VARCHAR(20) NOT NULL,
    correo VARCHAR(50),
    telefono VARCHAR(20),
    banco_destino VARCHAR(10) NOT NULL,
    tipo_cuenta TINYINT NOT NULL,
    numero_cuenta VARCHAR(50) NOT NULL
);

CREATE TABLE transferencia (
    transferencia_id INT unsigned auto_increment PRIMARY KEY,
    monto INT unsigned NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    destinatario_id INT NOT NULL
);