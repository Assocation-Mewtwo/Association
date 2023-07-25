CREATE TABLE weight_image (
	image_id int GENERATED ALWAYS AS IDENTITY,
	PRIMARY KEY (image_id),
	image_name text NOT NULL,
	image_link text NOT NULL.
  grams double precision NOT NULL
);