create table effects(
  id integer primary key autoincrement,
  name text not null,
  description text not null
);
create table heroes(
  id integer primary key autoincrement,
  name text not null,
  
  e_1_id integer,
  e_1_dmg integer,
  
  e_2_id integer,
  e_2_dmg integer,
  
  e_3_id integer,
  e_3_dmg integer,
  
  e_4_id integer,
  e_4_dmg integer,
  
  e_5_id integer,
  e_5_dmg integer,
  
  e_6_id integer,
  e_6_dmg integer,
  
  foreign key(e_1_id) references effects(id),
  foreign key(e_2_id) references effects(id),
  foreign key(e_3_id) references effects(id),
  foreign key(e_4_id) references effects(id),
  foreign key(e_5_id) references effects(id),
  foreign key(e_6_id) references effects(id)
);
create table weapons(
  id integer primary key autoincrement,
  name text not null,
  
  e_1_id integer,
  e_1_dmg integer,
  
  e_2_id integer,
  e_2_dmg integer,
  
  e_3_id integer,
  e_3_dmg integer,
  
  e_4_id integer,
  e_4_dmg integer,
  
  e_5_id integer,
  e_5_dmg integer,
  
  e_6_id integer,
  e_6_dmg integer,
  
  foreign key(e_1_id) references effects(id),
  foreign key(e_2_id) references effects(id),
  foreign key(e_3_id) references effects(id),
  foreign key(e_4_id) references effects(id),
  foreign key(e_5_id) references effects(id),
  foreign key(e_6_id) references effects(id)
);