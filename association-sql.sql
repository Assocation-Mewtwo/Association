CREATE TABLE unit_category (
	category_id text NOT NULL,
	PRIMARY KEY (category_id),
	category_name text NOT NULL
)

CREATE TABLE image (
	image_id int GENERATED ALWAYS AS IDENTITY,
	PRIMARY KEY (image_id),
	image_name text NOT NULL,
	image_link text NOT NULL
)

CREATE TABLE bracket (
	unit text NOT NULL,
	PRIMARY KEY (unit),
	category text NOT NULL,
	FOREIGN KEY (category) REFERENCES unit_category(category_id),
	range_min int NOT NULL,
	range_max int NOT NULL
)

CREATE TABLE image_bracket (
	_id int GENERATED ALWAYS AS IDENTITY,
	PRIMARY KEY (_id),
	image_FK int NOT NULL,
	FOREIGN KEY (image_FK) REFERENCES image(image_id),
	backet_FK text NOT NULL,
	FOREIGN KEY (backet_FK) REFERENCES bracket(unit)	
)