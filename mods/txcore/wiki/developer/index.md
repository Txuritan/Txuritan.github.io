---
title: "Developer | TXCore"
layout: wiki
---
TXCore comes with a an embedded INI4J and a wrapper around it for use with Forge mods.

#### Example

You will need to add TXCore to your ```build.gradle```.

```groovy
repositories {
    maven {
        url "https://raw.githubusercontent.com/Txuritan/maven-repository/master/"
    }
}

dependencies {
    compile "com.github.txuritan:txcore:<VERSION>"
}
```

And have Forge load your mod after TXCore.

```java
@Mod(
        dependencies = "required-after:txcore"
)
public class Core {
    
}
```

This is the code for TXCore's INI check system. Your class must implement IIniConfig or else your class wont be recognized.

```java
package com.github.txuritan.txcore;

import com.github.txuritan.txcore.api.config.Configuration;
import com.github.txuritan.txcore.api.config.IIniConfig;
import com.github.txuritan.txcore.ini4j.Ini;
import org.apache.logging.log4j.Logger;

public class Config implements IIniConfig {
    private Configuration configuration;

    public Config(Configuration configuration) {
        this.configuration = configuration;
    }

    private String section = "txcore";
    private String sectionTest = section + ".test";

    public Boolean debug;

    public Boolean testBoolean;
    public Double testDouble;
    public Float testFloat;
    public Integer testInteger;
    public Long testLong;
    public String testString;

    @Override
    public void config(Ini ini) {

        debug = configuration.getSetKeyBoolean(ini, section, "debug", false);

        if(debug) {
            getLogger().info("Preforming CoreIni Check");

            testBoolean = configuration.getSetKeyBoolean(ini, sectionTest, "testBoolean", false);
            getLogger().info("Default value: false, gotten: " + configuration.getKeyBoolean(ini, sectionTest, "testBoolean"));

            testDouble = configuration.getSetKeyDouble(ini, sectionTest, "testDouble", 1.0);
            getLogger().info("Default value: 1.0, gotten: " + configuration.getKeyDouble(ini, sectionTest, "testDouble"));

            testFloat = configuration.getSetKeyFloat(ini, sectionTest, "testFloat", 1.0f);
            getLogger().info("Default value: 1.0f, gotten: " + configuration.getKeyFloat(ini, sectionTest, "testFloat"));

            testInteger = configuration.getSetKeyInteger(ini, sectionTest, "testInteger", 1);
            getLogger().info("Default value: 1, gotten: " + configuration.getKeyInteger(ini, sectionTest, "testInteger"));

            testLong = configuration.getSetKeyLong(ini, sectionTest, "testLong", 1L);
            getLogger().info("Default value: 1L, gotten: " + configuration.getKeyLong(ini, sectionTest, "testLong"));

            testString = configuration.getSetKeyString(ini, sectionTest, "testString", "yay it works");
            getLogger().info("Default value: \"yay it works\", gotten: " + configuration.getKeyString(ini, sectionTest, "testString"));
        }
    }

    @Override
    public Logger getLogger() {
        return References.LOGGER;
    }

    @Override
    public String configPath() {
        return configuration.getSuggestedConfig();
    }

    @Override
    public String modId() {
        return References.MOD_ID;
    }
}
```

#### Register

You will need to register your config class with TXCore commonly done in the FMLPreInitializationEvent.

```java
package com.github.txuritan.txcore.proxy;

import com.github.txuritan.txcore.Config;
import com.github.txuritan.txcore.api.config.Configuration;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPostInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;

public class CommonProxy {
    public void preInit(FMLPreInitializationEvent event) {
        Configuration.INSTANCE.registerConfig(new Config(Configuration.INSTANCE));
    }

    public void init(FMLInitializationEvent event) {

    }

    public void postInit(FMLPostInitializationEvent event) {

    }
}
```

#### Output

```ini
[txcore.test]
testBoolean = false
testDouble = 1.0
testFloat = 1.0
testInteger = 1
testLong = 1
testString = yay it works

[txcore]
debug = false
```
