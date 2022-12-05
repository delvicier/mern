--name db: mern
--name tabla: notas
CREATE TABLE notas (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    descripcion VARCHAR (300),
    realizado BOOLEAN NOT NULL DEFAULT 0,
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)