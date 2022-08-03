/* Una empresa tiene registrados a sus clientes en una tabla llamada clientes. 
   Tambien tiene una tabla "provincias" donde registra los nombres de las provincias.
   En base a los datos solo tenes que copiarte las sentencias de creacion e insercion*/

-- En que provincias no tenemos clientes?
SELECT provincias.codigo, provincias.nombre FROM provincias
	LEFT JOIN clientes
	ON clientes.codigoProvincia = provincias.codigo
    WHERE clientes.codigoProvincia IS null

-- Que provincias tienen clientes? Pero sin repetir el nombre de la provincia
SELECT DISTINCT p.codigo, p.nombre FROM provincias AS p
    LEFT JOIN clientes AS c
    ON c.codigoProvincia = p.codigo
    WHERE c.codigoProvincia
