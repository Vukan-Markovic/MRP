insert into material(id_material,name_material,price_material,dimensions_material) values(1,'Čelik',20.00,'');
insert into material(id_material,name_material,price_material,dimensions_material) values(2,'Drvo',4000.00,'5000 x 15 x 200');
insert into material(id_material,name_material,price_material,dimensions_material) values(3,'Iverica',2500.00,'7000 x 5 x 500');

insert into product(product_key,dimensions_product,name_product,price_product) values (1,'80 x 80 x 100','Sto',10000.0);
insert into product(product_key,dimensions_product,name_product,price_product) values (2,'150 x 10 x 30','Polica',20.0);
insert into product(product_key,dimensions_product,name_product,price_product) values (3,'','Trosed',25000.0);

insert into part_of_product(id, dimensions_part_of_product, id_material, name_part_of_product, product_key)
	values (1, '5 x 0.5 x 0.5', 1, 'Šraf', 1);
insert into part_of_product(id, dimensions_part_of_product, id_material, name_part_of_product, product_key)
	values (2, '10 x 0.5 x 0.5', 1, 'Šraf', 2);
insert into part_of_product(id, dimensions_part_of_product, id_material, name_part_of_product, product_key)
	values (3, '200 x 100 x 30', 3, 'Daska', 3);

insert into warehouse(id, contact, location, name) values (1, '021/444-666', 'Cara Dušana 50', 'Skladište broj 1');

insert into warehouse_product(id_warehouse,product_key,quantity) values (1, 1, 17);
insert into warehouse_product(id_warehouse,product_key,quantity) values (1, 2, 23);
insert into warehouse_product(id_warehouse,product_key,quantity) values (1, 3, 5);

insert into warehouse_material(id_warehouse, id_material, quantity)	values (1, 1, 10);
insert into warehouse_material(id_warehouse, id_material, quantity)	values (1, 2, 19);
insert into warehouse_material(id_warehouse, id_material, quantity)	values (1, 3, 44);

insert into operational_production_plan(id, needed_quantity_of_product) values (1, 4);
insert into operational_production_plan(id, needed_quantity_of_product) values (2, 8);

insert into product_operational_production_plan(product_key, id) values (3, 1);
insert into product_operational_production_plan(product_key, id) values (2, 2);

insert into product_resource_plan(id, needed_quantity_of_material, id_material) values (1, 12, 2);

insert into material_product_resourse_plan(id, id_material) values (1, 2);