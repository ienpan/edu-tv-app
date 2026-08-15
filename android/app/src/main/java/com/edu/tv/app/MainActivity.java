package com.edu.tv.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(com.getcapacitor.plugin.Keyboard.class);
        super.onCreate(savedInstanceState);
    }
}
