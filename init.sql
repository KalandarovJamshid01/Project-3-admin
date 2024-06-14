-- Drop and recreate the 'connections' table
DROP TABLE IF EXISTS connections;

CREATE TABLE connections (
    id SERIAL PRIMARY KEY,
    mail TEXT,
    title TEXT,
    short_description TEXT,
    long_description TEXT,
    contact TEXT,
    img_url TEXT,
    img_id INT,
    created_at TIMESTAMP
);

-- Corrected INSERT statement for 'connections' table
INSERT INTO connections (id, mail, title, short_description, long_description, contact, img_url, img_id, created_at) VALUES
(14, 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'http://res.cloudinary.com/dq5dvbrtp/image/upload/v1718122567/my_website_images/nmfppijzzpcb73fcuxou.jpg', 1, '2024-06-11T16:23:10.070Z'),
(15, 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'http://res.cloudinary.com/dq5dvbrtp/image/upload/v1718122988/my_website_images/hlmliacvwol0t45jwcru.jpg', 2, '2024-06-11T16:31:56.772Z'),
(16, 'asdf', 'asdf', 'adsf', 'asdf', 'asdf', 'https://res.cloudinary.com/dq5dvbrtp/image/upload/v1718123773/my_website_images/n7845sndo9qtcgiuud8w.jpg', 3, '2024-06-11T16:36:14.767Z'),
(17, 'asdf', 'asdf', 'adsf', 'asdf', 'asdf', 'https://res.cloudinary.com/dq5dvbrtp/image/upload/v1718123808/my_website_images/o7lmfdkyhrgxctznfxl7.jpg', 4, '2024-06-11T16:36:49.945Z');

-- Drop and recreate the 'images' table
DROP TABLE IF EXISTS images;

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    img_url TEXT,
    title TEXT,
    context TEXT,
    file_name TEXT,
    width INT,
    height INT,
    format TEXT,
    folder TEXT,
    bytes INT,
    created_at TIMESTAMP
);

-- Corrected INSERT statement for 'images' table
INSERT INTO images (id, img_url, title, context, file_name, width, height, format, folder, bytes, created_at) VALUES 
(48, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718167314/my_website_images/axfsfvbuqbanysgpjrkl.jpg', 'dfg', 'dfg', 'file', 1700, 2185, 'jpg', 'my_website_images', 143403, '2024-06-12T04:41:55.116Z'),
(47, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718167291/my_website_images/pvsrfwsp4si6bb3ozfvb.jpg', 'qwe', 'qwe', 'file', 1948, 2505, 'jpg', 'my_website_images', 165162, '2024-06-12T04:41:32.151Z'),
(46, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166647/my_website_images/dgpfv3tvp8emv1ysxv3o.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:48.207Z'),
(45, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166647/my_website_images/kvc873pvavofgyobi7rt.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:47.997Z'),
(44, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166647/my_website_images/v5mbcd8bqxjxvpbnek13.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:47.916Z'),
(43, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166647/my_website_images/r20lubwwmxztevfjfwxj.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:47.864Z'),
(42, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166647/my_website_images/swkckzof9kkflw8r2otg.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:47.789Z'),
(41, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166647/my_website_images/lsqg1u6dxipgfnwaiekd.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:47.747Z'),
(40, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166646/my_website_images/z4p9kojq7h34wbwco5mo.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:47.156Z'),
(39, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166646/my_website_images/jyc3mhct9j5ddmcrbklf.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:46.985Z'),
(38, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166646/my_website_images/zz0uu8priblpgejjmf2v.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:46.941Z'),
(37, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166646/my_website_images/qfzuyybxb3aoz7dgne4s.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:46.937Z'),
(36, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166646/my_website_images/ry4isijzo3r3x0s3ucf3.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:46.922Z'),
(35, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166646/my_website_images/oypgzvzevmg4w0ifv06f.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:46.897Z'),
(34, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166645/my_website_images/m8ox0ekg12l44v4e7ahc.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:46.092Z'),
(32, 'http://res.cloudinary.com/dl8bppbqg/image/upload/v1718166645/my_website_images/bvswye39tgjipxh7vfpm.png', '32', '32', 'file', 32, 32, 'png', 'my_website_images', 975, '2024-06-12T04:30:46.022Z');
