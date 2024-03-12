
drop table if exists Quiz;

create table Quiz (
    id bigint not null auto_increment primary key,
    question varchar(255) not null,
    category varchar(60) not null,
    level int not null
);
