---
title: RetentionPolicy.class
author: KrLite
createTime: 2024/06/07 17:54:44
permalink: /notes/coding/java/yv9n87gb/
---

==`package java.lang.annotation;`==

# `RetentionPolicy.class`

`RetentionPolicy.class`是一个枚举类，存储了用于定义[注解](../annotation.md)策略属性的枚举常量。

## 枚举常量

| 名称    | 意义 | 用途                                                |
| ------- | ---- | --------------------------------------------------- |
| SOURCE  |      | 注解的信息仅存在于编译器处理期间                    |
| CLASS   |      | 编译器将注解存储于 `.class` 文件中（默认）          |
| RUNTIME |      | 编译器将注解存储于 `.class` 文件中，并可由 JVM 读入 |
