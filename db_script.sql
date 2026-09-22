create table effects(
id integer primary key autoincrement,
name text not null,
description text not null,
img text not null,
colour text not null
);

create TABLE heroes(
id integer primary key autoincrement,
name text not null,
description text not null,
health integer not null,
img text not null,

e_1_id integer not null,
e_1_num integer not null,

e_2_id integer not null,
e_2_num integer not null,

e_3_id integer not null,
e_3_num integer not null,

e_4_id integer not null,
e_4_num integer not null,

e_5_id integer not null,
e_5_num integer not null,

e_6_id integer not null,
e_6_num integer not null,

foreign key(e_1_id) references effects(id),
foreign key(e_2_id) references effects(id),
foreign key(e_3_id) references effects(id),
foreign key(e_4_id) references effects(id),
foreign key(e_5_id) references effects(id),
foreign key(e_6_id) references effects(id)
);

CREATE TABLE weapons(
id integer primary key autoincrement,
name text not null,
health integer not null,
repair_cost integer not null,
img text not null,

e_1_id integer not null,
e_1_num integer not null,

e_2_id integer not null,
e_2_num integer not null,

e_3_id integer not null,
e_3_num integer not null,

e_4_id integer not null,
e_4_num integer not null,

e_5_id integer not null,
e_5_num integer not null,

e_6_id integer not null,
e_6_num integer not null,

foreign key(e_1_id) references effects(id),
foreign key(e_2_id) references effects(id),
foreign key(e_3_id) references effects(id),
foreign key(e_4_id) references effects(id),
foreign key(e_5_id) references effects(id),
foreign key(e_6_id) references effects(id)
);


drop TABLE [weapons];
drop TABLE [heroes];
drop TABLE [effects];
