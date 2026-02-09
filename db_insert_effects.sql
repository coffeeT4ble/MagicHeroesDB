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
),
(
    'SKULL',
    'deal damage to enemy
    choose which weapon an enemy uses next
    can be picked even if shielded',
    'skull'
),
(
    'MIMIC',
    'copy enemy`s last used effect',
    'mimic'
),
(
    'LIFESTEAL',
    'deal damage to enemy
    caster gets healed for half the dealt damage
    round up if dealt damage is odd',
    'lifesteal'
),
(
    'BONES',
    'adds to bone token
    info on tokens in character desc',
    'bones_token'
)

select id, name from effects;
