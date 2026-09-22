insert into effects(name, description, img, colour) values
(
    'BASIC ATTACK',
    'deals damage to enemy',
    'basic_attack',
    'red'
),
(
    'BASIC HEAL',
    'heals player',
    'basic_heal',
    'green'
),
(
    'SHIELD',
    'defends player for a number of health
    any damage destroys the shield
    shield gets placed on weapon
    weapon with shield cannot be used till:
    - broken by enemy
    - rejected by player',
    'basic_shield',
    'blue'
),
(
    'CHAIN',
    'disables hero bonuses for enemy
    conditions:
    - lasts for x amount of rounds
    - caster cannot use weapon till:
    -- effects ends
    -- effect cancelled by caster',
    'chain',
    'black'
),
(
    'FIST',
    'deals damage to either enemy or enemy weapon',
    'fist',
    'black'
),
(
    'WEAPON DAMAGE',
    'deals damage to enemy weapon',
    'weapon_damage',
    'black'
),
(
    'BROKEN HEART',
    'heal or attack
    conditions:
    - if player health >= 10:
    -- damage enemy
    - if player health < 10:
    -- heal player',
    'broken_heart',
    'green'
),
(
    'SKULL',
    'deal damage to enemy
    choose which weapon an enemy uses next
    can be picked even if shielded',
    'skull',
    'black'
),
(
    'MIMIC',
    'copy enemy`s last used effect',
    'mimic',
    'blue'
),
(
    'LIFESTEAL',
    'deal damage to enemy
    caster gets healed for half the dealt damage
    round up if dealt damage is odd',
    'lifesteal',
    'red'
),
(
    'BONES',
    'adds to bone token
    info on tokens in character desc',
    'bones_token',
    'black'
)

select id, name from effects;
