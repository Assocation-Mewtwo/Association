CREATE TABLE weight_image (
	image_id int GENERATED ALWAYS AS IDENTITY,
	PRIMARY KEY (image_id),
	name_desc text NOT NULL,
  name_single text NOT NULL,
  name_plural text NOT NULL,
	image_link text NOT NULL,
  grams double precision NOT NULL
);