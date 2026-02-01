create table effects(
id integer primary key autoincrement,
name text not null,
description text not null,
img text not null
);

create TABLE heroes(
id integer primary key autoincrement,
name text not null,
description text not null,
health integer not null,

e_1_id text not null,
e_1_num integer not null,

e_2_id text not null,
e_2_num integer not null,

e_3_id text not null,
e_3_num integer not null,

e_4_id text not null,
e_4_num integer not null,

e_5_id text not null,
e_5_num integer not null,

e_6_id text not null,
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

e_1_id text not null,
e_1_num integer not null,

e_2_id text not null,
e_2_num integer not null,

e_3_id text not null,
e_3_num integer not null,

e_4_id text not null,
e_4_num integer not null,

e_5_id text not null,
e_5_num integer not null,

e_6_id text not null,
e_6_num integer not null,

foreign key(e_1_id) references effects(id),
foreign key(e_2_id) references effects(id),
foreign key(e_3_id) references effects(id),
foreign key(e_4_id) references effects(id),
foreign key(e_5_id) references effects(id),
foreign key(e_6_id) references effects(id)
);

insert into effects(name, description, img) values
(
    'BASIC ATTACK',
    'deals damage to enemy',
    'basic_attack'
),
(
    'BASIC HEAL',
    'heals player',
    'basic_heal'
),
(
    'SHIELD',
    'defends player for a number of health
    any damage destroys the shield
    shield gets placed on weapon
    weapon with shield cannot be used till:
    - broken by enemy
    - rejected by player',
    'basic_shield'
),
(
    'CHAIN',
    'disables hero bonuses for enemy
    conditions:
    - lasts for x amount of rounds
    - caster cannot use weapon till:
    -- effects ends
    -- effect cancelled by caster',
    'chain'
),
(
    'FIST',
    'deals damage to either enemy or enemy weapon',
    'fist'
),
(
    'WEAPON DAMAGE',
    'deals damage to enemy weapon',
    'weapon_damage'
),
(
    'BROKEN HEART',
    'heal or attack
    conditions:
    - if player health > 10:
    -- damage enemy
    - if player health < 10:
    -- heal player',
    'broken_heart'
)

--insert into effects(name, description, img) values

drop TABLE [weapons];
drop TABLE [heroes];
drop TABLE [effects];